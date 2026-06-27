from pathlib import Path
from PIL import Image, ImageDraw, ImageEnhance, ImageFont


ROOT = Path(__file__).resolve().parents[1]
DESKTOP = Path("/Users/kubotakeisuke/Desktop")
OUT = ROOT / "public" / "images" / "before-after"

FONT_REG = "/System/Library/Fonts/ヒラギノ角ゴシック W4.ttc"
FONT_BOLD = "/System/Library/Fonts/ヒラギノ角ゴシック W8.ttc"

BG = "#FAFAF9"
SURFACE = "#FFFFFF"
PRIMARY = "#5F7161"
SECONDARY = "#D48E7E"
ACCENT = "#C5A059"
TEXT = "#434343"
MUTED = "#78716C"
BORDER = "#E7E5E4"
GOLD_DARK = "#9F8550"


def font(size, bold=False):
    return ImageFont.truetype(FONT_BOLD if bold else FONT_REG, size)


def rounded(draw, xy, radius, fill, outline=None, width=1):
    draw.rounded_rectangle(xy, radius=radius, fill=fill, outline=outline, width=width)


def text_center(draw, box, text, fnt, fill, anchor="mm"):
    x1, y1, x2, y2 = box
    draw.text(((x1 + x2) / 2, (y1 + y2) / 2), text, font=fnt, fill=fill, anchor=anchor)


def cover(img, size, crop=None, brighten=1.04, contrast=1.03):
    if crop:
        img = img.crop(crop)
    img = ImageEnhance.Brightness(img).enhance(brighten)
    img = ImageEnhance.Contrast(img).enhance(contrast)
    src_ratio = img.width / img.height
    dst_ratio = size[0] / size[1]
    if src_ratio > dst_ratio:
        h = size[1]
        w = round(h * src_ratio)
    else:
        w = size[0]
        h = round(w / src_ratio)
    img = img.resize((w, h), Image.Resampling.LANCZOS)
    left = (w - size[0]) // 2
    top = (h - size[1]) // 2
    return img.crop((left, top, left + size[0], top + size[1]))


def contain(img, max_size, crop=None, brighten=1.04, contrast=1.03):
    if crop:
        img = img.crop(crop)
    img = ImageEnhance.Brightness(img).enhance(brighten)
    img = ImageEnhance.Contrast(img).enhance(contrast)
    img.thumbnail(max_size, Image.Resampling.LANCZOS)
    return img


def mask_eyes(img, rects):
    img = img.copy()
    draw = ImageDraw.Draw(img, "RGBA")
    for rect in rects:
        x1, y1, x2, y2 = rect
        radius = max(8, (y2 - y1) // 2)
        draw.rounded_rectangle(rect, radius=radius, fill=(197, 160, 89, 255))
        inset = 4
        draw.rounded_rectangle(
            (x1 + inset, y1 + inset, x2 - inset, y2 - inset),
            radius=max(6, radius - inset),
            fill=(216, 191, 126, 255),
        )
        draw.rounded_rectangle(rect, radius=radius, outline=(255, 255, 255, 230), width=4)
    return img


def label_pill(draw, xy, text, w=None):
    x, y = xy
    f = font(32, True)
    bbox = draw.textbbox((0, 0), text, font=f)
    width = w or (bbox[2] - bbox[0] + 44)
    rounded(draw, (x, y, x + width, y + 62), 14, SURFACE, BORDER, 2)
    text_center(draw, (x, y, x + width, y + 62), text, f, GOLD_DARK)
    return width


def metric_card(draw, xy, title, before, after, unit="", big=True):
    x, y = xy
    w, h = 420, 154
    rounded(draw, (x, y, x + w, y + h), 16, SURFACE, ACCENT, 2)
    rounded(draw, (x, y, x + w, y + 48), 16, ACCENT)
    draw.rectangle((x, y + 28, x + w, y + 48), fill=ACCENT)
    text_center(draw, (x, y, x + w, y + 48), title, font(28, True), "white")
    draw.text((x + 32, y + 97), f"{before}{unit}", font=font(26, True), fill=GOLD_DARK, anchor="lm")
    draw.text((x + 157, y + 97), "→", font=font(28, True), fill=GOLD_DARK, anchor="lm")
    after_font = font(44 if big else 38, True)
    draw.text((x + 218, y + 98), f"{after}{unit}", font=after_font, fill=SECONDARY, anchor="lm")
    hi_w = draw.textbbox((0, 0), f"{after}{unit}", font=after_font)[2] + 12
    draw.rectangle((x + 214, y + 118, x + 214 + hi_w, y + 130), fill="#F6D766")


def paste_panel(base, img, box, label):
    draw = ImageDraw.Draw(base, "RGBA")
    x1, y1, x2, y2 = box
    rounded(draw, box, 24, SURFACE, BORDER, 2)
    inner = (x1 + 16, y1 + 16, x2 - 16, y2 - 78)
    panel = cover(img, (inner[2] - inner[0], inner[3] - inner[1]))
    base.paste(panel, inner)
    draw.rectangle((x1, y2 - 62, x2, y2), fill=ACCENT if label == "Before" else SECONDARY)
    text_center(draw, (x1, y2 - 62, x2, y2), label, font(34, True), "white")


def make_card(case_id, before_img, after_img, tags, result, subtitle):
    canvas = Image.new("RGB", (1200, 1200), BG)
    draw = ImageDraw.Draw(canvas, "RGBA")
    draw.rectangle((0, 0, 1200, 150), fill=PRIMARY)
    x = 92
    for t in tags:
        x += label_pill(draw, (x, 44), t) + 18
    paste_panel(canvas, before_img, (78, 200, 542, 1030), "Before")
    paste_panel(canvas, after_img, (658, 200, 1122, 1030), "After")
    draw.polygon([(575, 555), (575, 645), (650, 600)], fill=ACCENT)
    draw.ellipse((420, 738, 780, 1098), fill=SECONDARY)
    text_center(draw, (420, 805, 780, 875), "3ヶ月で", font(40, True), "white")
    text_center(draw, (420, 895, 780, 1005), result, font(70, True), "white")
    draw.text((600, 1130), subtitle, font=font(34, True), fill=PRIMARY, anchor="mm")
    canvas.save(OUT / f"{case_id}-card-v6.webp", quality=92)


def make_detail(case_id, main_img, tags, title, metrics, subtitle):
    canvas = Image.new("RGB", (1400, 1600), BG)
    draw = ImageDraw.Draw(canvas, "RGBA")
    draw.text((700, 86), "お客様の変化", font=font(44, True), fill=PRIMARY, anchor="mm")
    x = 198
    for t in tags:
        x += label_pill(draw, (x, 150), t) + 18
    rounded(draw, (70, 250, 1330, 1045), 28, SURFACE, BORDER, 2)
    photo = cover(main_img, (760, 720))
    canvas.paste(photo, (110, 292))
    y = 308
    for item in metrics:
        metric_card(draw, (900, y), *item)
        y += 184
    draw.text((700, 1138), title, font=font(48, True), fill=GOLD_DARK, anchor="mm")
    draw.text((700, 1200), subtitle, font=font(28, True), fill=MUTED, anchor="mm")
    draw.text((700, 1268), "※結果には個人差があります。効果を保証するものではありません。", font=font(24), fill=MUTED, anchor="mm")
    canvas.save(OUT / f"{case_id}-detail-v6.webp", quality=92)


def split_pair(img):
    w, h = img.size
    return img.crop((0, 0, w // 2, h)), img.crop((w // 2, 0, w, h))


def main():
    OUT.mkdir(parents=True, exist_ok=True)

    c1_before_side = mask_eyes(Image.open(DESKTOP / "Before2.JPG").convert("RGB"), [(360, 118, 575, 218)])
    c1_after_side = mask_eyes(Image.open(DESKTOP / "After2.JPG").convert("RGB"), [(360, 126, 575, 232)])
    c1_before_front = mask_eyes(Image.open(DESKTOP / "Before1.JPG").convert("RGB"), [(360, 120, 735, 225)])
    c1_after_front = mask_eyes(Image.open(DESKTOP / "After1.JPG").convert("RGB"), [(380, 130, 755, 238)])

    make_card(
        "case-01",
        c1_before_side,
        c1_after_side,
        ["40代前半", "女性", "160cm", "会社員"],
        "-9.0kg",
        "服を選ぶのが楽しくなりました！",
    )
    make_detail(
        "case-01",
        Image.new("RGB", (1600, 1200), SURFACE),
        ["40代前半", "女性", "160cm", "会社員"],
        "服を選ぶのが楽しくなりました！",
        [
            ("体重", "61.7", "52.7", "kg"),
            ("体脂肪率", "34.7", "27.4", "%"),
            ("体内年齢", "48", "37", "歳"),
        ],
        "藤枝市で耳つぼダイエットを始めたお客様",
    )
    # Replace blank detail photo with a two-panel front comparison.
    detail_path = OUT / "case-01-detail-v6.webp"
    detail = Image.open(detail_path).convert("RGB")
    photo_area = Image.new("RGB", (760, 720), SURFACE)
    paste_panel(photo_area, c1_before_front, (0, 0, 360, 700), "Before")
    paste_panel(photo_area, c1_after_front, (400, 0, 760, 700), "After")
    detail.paste(photo_area, (110, 292))
    detail.save(detail_path, quality=92)

    c2_front = mask_eyes(Image.open(DESKTOP / "ビフォアフ1.JPG").convert("RGB"), [(330, 96, 810, 238), (1345, 96, 1825, 238)])
    c2_side = mask_eyes(Image.open(DESKTOP / "ビフォアフ３.JPG").convert("RGB"), [(305, 145, 665, 300), (1368, 140, 1730, 295)])
    before_side, after_side = split_pair(c2_side)
    make_card(
        "case-02",
        before_side,
        after_side,
        ["40代後半", "女性", "153cm", "会社員"],
        "-9.7kg",
        "ウエストまわりがすっきりして驚きました！",
    )
    make_detail(
        "case-02",
        c2_front,
        ["40代後半", "女性", "153cm", "会社員"],
        "ウエストまわりがすっきりして驚きました！",
        [
            ("体重", "68.6", "58.9", "kg"),
            ("体脂肪率", "39.7", "31.7", "%"),
            ("体内年齢", "59", "48", "歳"),
            ("ウエスト", "90", "76", "cm"),
        ],
        "藤枝市で耳つぼダイエットを始めたお客様",
    )

if __name__ == "__main__":
    main()
