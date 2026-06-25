from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor, white
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
import os

FONTS = r"C:\Users\moowg\claude code\seu-plano\fonts"
pdfmetrics.registerFont(TTFont("Mont", f"{FONTS}/Montserrat-Regular.ttf"))
pdfmetrics.registerFont(TTFont("Mont-Bold", f"{FONTS}/Montserrat-Bold.ttf"))
pdfmetrics.registerFont(TTFont("Mont-Italic", f"{FONTS}/Montserrat-Italic.ttf"))
pdfmetrics.registerFont(TTFont("Mont-BoldItalic", f"{FONTS}/Montserrat-BoldItalic.ttf"))
pdfmetrics.registerFont(TTFont("Mont-ExtraBold", f"{FONTS}/Montserrat-ExtraBold.ttf"))
pdfmetrics.registerFont(TTFont("Mont-SemiBold", f"{FONTS}/Montserrat-SemiBold.ttf"))

W, H = A4
OUT = r"C:\Users\moowg\claude code\seu-plano\public\downloads\ebook-o-seu-plano.pdf"
IMG = r"C:\Users\moowg\claude code\seu-plano\public\images"
LOGO = f"{IMG}/logo-brand.png"
AVATAR_DESK = f"{IMG}/avatar-desk.jpg"
AVATAR_SIDE = f"{IMG}/avatar-side.jpg"
AVATAR_STRAT = f"{IMG}/avatar-strategy.jpg"
AVATAR_CLOSE = f"{IMG}/avatar-closeup.jpg"
BG_CINEMA = f"{IMG}/ChatGPT Image 6 de mai. de 2026, 01_17_25.png"

DEEP = HexColor("#070B14")
SURF = HexColor("#0D1117")
GOLD_D = HexColor("#B87333")
GOLD = HexColor("#FFA300")
GOLD_L = HexColor("#FFD080")
ELEC = HexColor("#0047FF")
RED = HexColor("#EF4444")
GREEN = HexColor("#22C55E")
W60 = HexColor("#999999")
W40 = HexColor("#666666")
W25 = HexColor("#404040")
W15 = HexColor("#1a1a2e")
GOLD_BG = HexColor("#120D05")
RED_BG = HexColor("#0F0507")
GREEN_BG = HexColor("#050F07")
BLUE_BG = HexColor("#060B1A")


def bg(c):
    c.setFillColor(DEEP)
    c.rect(0, 0, W, H, fill=1, stroke=0)

def foot(c, n):
    c.setFillColor(W25)
    c.setFont("Mont", 7)
    c.drawString(40, 22, "oseuplano.com  •  WhatsApp: +1 (716) 939-9340")
    c.drawRightString(W-40, 22, f"@seuplano.ofc  •  {n}/5")

def box(c, x, y, w, h, brd=W15, fl=SURF):
    c.setFillColor(fl)
    c.setStrokeColor(brd)
    c.setLineWidth(0.8)
    c.roundRect(x, y, w, h, 8, fill=1, stroke=1)

def img(c, path, x, y, w, h, alpha=0.0):
    try:
        c.drawImage(path, x, y, width=w, height=h, preserveAspectRatio=True, anchor='c', mask='auto')
        if alpha > 0:
            c.saveState()
            c.setFillColor(DEEP)
            c.setFillAlpha(alpha)
            c.rect(x, y, w, h, fill=1, stroke=0)
            c.restoreState()
    except:
        pass


# ============================================================
# PAGE 1 — CAPA (avatar desk + logo)
# ============================================================
def p1(c):
    bg(c)

    # Avatar desk — right half, behind content
    img(c, AVATAR_DESK, W/2-20, H-520, W/2+20, 460, 0.25)

    # Dark overlay left side for text readability
    c.saveState()
    c.setFillColor(DEEP)
    c.setFillAlpha(0.7)
    c.rect(0, H-520, W/2+40, 460, fill=1, stroke=0)
    c.restoreState()

    # Logo image — top left
    try:
        c.drawImage(LOGO, 30, H-195, width=220, height=220*0.56, preserveAspectRatio=True, mask='auto')
    except:
        pass

    # Main title
    c.setFillColor(white)
    c.setFont("Mont-ExtraBold", 38)
    c.drawString(40, H-265, "Entenda o Jogo")
    c.drawString(40, H-310, "Antes de Entrar")

    # Gold accent line
    c.setStrokeColor(GOLD)
    c.setLineWidth(3)
    c.line(40, H-328, 200, H-328)

    # Subtitle
    c.setFillColor(W60)
    c.setFont("Mont", 14)
    c.drawString(40, H-360, "O que o mercado financeiro não")
    c.drawString(40, H-380, "quer que você saiba sobre consórcio.")

    # Tagline
    c.setFillColor(GOLD_L)
    c.setFont("Mont-BoldItalic", 20)
    c.drawString(40, H-430, "Informação é poder.")

    # Bottom bar
    c.setFillColor(SURF)
    c.rect(0, 0, W, 80, fill=1, stroke=0)
    c.setStrokeColor(GOLD_D)
    c.setLineWidth(0.5)
    c.line(0, 80, W, 80)

    c.setFillColor(W40)
    c.setFont("Mont", 9)
    c.drawCentredString(W/2, 50, "WhatsApp: +1 (716) 939-9340  •  @seuplano.ofc  •  oseuplano.com")
    c.setFillColor(W25)
    c.setFont("Mont", 7)
    c.drawCentredString(W/2, 28, "Regulamentado pelo Banco Central do Brasil  •  Associada à ABAC")


# ============================================================
# PAGE 2 — A VERDADE
# ============================================================
def p2(c):
    bg(c)
    foot(c, 2)

    c.setFillColor(ELEC)
    c.setFont("Mont-Bold", 8)
    c.drawString(40, H-65, "CAPÍTULO 01 — A VERDADE QUE NINGUÉM TE CONTA")

    c.setFillColor(white)
    c.setFont("Mont-ExtraBold", 26)
    c.drawString(40, H-100, "Você sabia que paga")
    c.setFillColor(GOLD)
    c.drawString(40, H-132, "3 imóveis para morar em 1?")

    c.setFillColor(W60)
    c.setFont("Mont", 10)
    c.drawString(40, H-162, "Um imóvel de R$ 300.000. Compare o custo real entre financiamento e consórcio.")
    c.drawString(40, H-177, "Os números não mentem — e o que eles revelam vai mudar sua forma de pensar.")

    # RED BOX
    by = H-390
    bw = (W-95)//2
    box(c, 40, by, bw, 185, brd=HexColor("#7F1D1D"), fl=RED_BG)
    c.setFillColor(RED)
    c.setFont("Mont-Bold", 9)
    c.drawString(55, by+160, "FINANCIAMENTO — 30 ANOS")
    c.setFillColor(white)
    c.setFont("Mont-ExtraBold", 24)
    c.drawString(55, by+125, "R$ 1.097.640")
    c.setFillColor(RED)
    c.setFont("Mont-Bold", 13)
    c.drawString(55, by+100, "3,6x o valor do imóvel")
    c.setFillColor(W40)
    c.setFont("Mont", 9)
    for i, t in enumerate([
        "Parcela: R$ 3.049/mês",
        "Juros pagos: R$ 797.640",
        "Taxa: 0,95% a.m. (juros compostos)",
        "Você paga quase R$ 800 mil só de juros.",
        "O banco fica rico. Você fica preso."
    ]):
        c.drawString(55, by+75-i*15, t)

    # GREEN BOX
    gx = W//2+15
    box(c, gx, by, bw, 185, brd=HexColor("#14532D"), fl=GREEN_BG)
    c.setFillColor(GREEN)
    c.setFont("Mont-Bold", 9)
    c.drawString(gx+15, by+160, "CONSÓRCIO — 200 MESES")
    c.setFillColor(white)
    c.setFont("Mont-ExtraBold", 24)
    c.drawString(gx+15, by+125, "R$ 385.500")
    c.setFillColor(GREEN)
    c.setFont("Mont-Bold", 13)
    c.drawString(gx+15, by+100, "1,28x o valor do imóvel")
    c.setFillColor(W40)
    c.setFont("Mont", 9)
    for i, t in enumerate([
        "Parcela: R$ 1.927/mês",
        "Taxa admin: R$ 85.500 (total do plano)",
        "Sem juros compostos",
        "Custo transparente desde o dia 1.",
        "Você constrói patrimônio de verdade."
    ]):
        c.drawString(gx+15, by+75-i*15, t)

    # GOLD SAVINGS
    sy = by-70
    box(c, 40, sy, W-80, 50, brd=GOLD_D, fl=GOLD_BG)
    c.setFillColor(GOLD)
    c.setFont("Mont-Bold", 10)
    c.drawString(55, sy+32, "SUA ECONOMIA")
    c.setFillColor(GOLD_L)
    c.setFont("Mont-ExtraBold", 24)
    c.drawString(55, sy+5, "R$ 712.140")
    c.setFillColor(W40)
    c.setFont("Mont", 11)
    c.drawString(260, sy+15, "Daria para comprar outros 2 imóveis.")

    c.setFillColor(W60)
    c.setFont("Mont-BoldItalic", 11)
    c.drawString(40, sy-30, "Por que ninguém te mostrou isso antes?")
    c.setFillColor(W40)
    c.setFont("Mont", 10)
    c.drawString(40, sy-50, "Simples: o banco lucra R$ 797 mil em juros com cada financiamento.")
    c.drawString(40, sy-65, "Qual produto você acha que ele vai te recomendar?")

    c.setFillColor(GOLD)
    c.setFont("Mont-BoldItalic", 11)
    c.drawString(40, sy-95, "A pergunta não é se o consórcio funciona.")
    c.drawString(40, sy-112, "A pergunta é: quanto você já perdeu por não saber disso?")


# ============================================================
# PAGE 3 — SORTEIO
# ============================================================
def p3(c):
    bg(c)
    foot(c, 3)

    c.setFillColor(ELEC)
    c.setFont("Mont-Bold", 8)
    c.drawString(40, H-65, "CAPÍTULO 02 — O SEGREDO DO SORTEIO MANUAL")

    c.setFillColor(white)
    c.setFont("Mont-ExtraBold", 24)
    c.drawString(40, H-100, "Suas chances são 15x maiores")
    c.setFillColor(GOLD)
    c.setFont("Mont-Bold", 18)
    c.drawString(40, H-128, "— se você souber onde entrar.")

    c.setFillColor(W60)
    c.setFont("Mont", 10)
    c.drawString(40, H-158, "A forma como o sorteio acontece muda TUDO. A maioria dos vendedores nunca te explica.")

    by = H-345
    bw = (W-95)//2

    box(c, 40, by, bw, 155, brd=HexColor("#7F1D1D"), fl=RED_BG)
    c.setFillColor(RED)
    c.setFont("Mont-Bold", 10)
    c.drawString(55, by+130, "LOTERIA FEDERAL")
    c.setFillColor(white)
    c.setFont("Mont-ExtraBold", 34)
    c.drawString(55, by+88, "10.000+")
    c.setFillColor(W40)
    c.setFont("Mont", 9)
    c.drawString(55, by+66, "participantes por grupo")
    c.drawString(55, by+48, "Chance mensal: < 0,04%")
    c.drawString(55, by+30, "Sem controle ou transparência")
    c.drawString(55, by+14, "Números da loteria externa")

    gx = W//2+15
    box(c, gx, by, bw, 155, brd=HexColor("#14532D"), fl=GREEN_BG)
    c.setFillColor(GREEN)
    c.setFont("Mont-Bold", 10)
    c.drawString(gx+15, by+130, "SORTEIO MANUAL")
    c.setFillColor(white)
    c.setFont("Mont-ExtraBold", 34)
    c.drawString(gx+15, by+88, "650")
    c.setFillColor(W40)
    c.setFont("Mont", 9)
    c.drawString(gx+15, by+66, "participantes (imóveis)")
    c.drawString(gx+15, by+48, "Chances 15x maiores")
    c.drawString(gx+15, by+30, "Assembleia ao vivo, transparente")
    c.drawString(gx+15, by+14, "Verificável por todos")

    my = by-22
    c.setFillColor(GOLD)
    c.setFont("Mont-Bold", 11)
    c.drawString(40, my, "5 formas de ser contemplado:")

    items = [
        ("Sorteio mensal", "Chance real em cada assembleia — grupos menores, mais chances."),
        ("Lance livre", "Ofereça um percentual para antecipar sua contemplação."),
        ("Lance fixo", "Fração pequena, próxima à cota do sorteio — mais chances de liberação."),
        ("Lance embutido", "Use parte do próprio crédito como lance — sem dinheiro extra."),
        ("FGTS como lance", "Para imóveis — vantagem enorme sobre o financiamento."),
    ]
    for i, (t, d) in enumerate(items):
        iy = my-25-i*28
        c.setFillColor(GOLD_D)
        c.circle(50, iy+4, 4, fill=1, stroke=0)
        c.setFillColor(white)
        c.setFont("Mont-Bold", 10)
        c.drawString(65, iy, t)
        c.setFillColor(W40)
        c.setFont("Mont", 9)
        c.drawString(65, iy-12, d)

    sty = my-185
    box(c, 40, sty, W-80, 45, brd=GOLD_D, fl=GOLD_BG)
    c.setFillColor(GOLD)
    c.setFont("Mont-ExtraBold", 17)
    c.drawString(55, sty+15, "370 mil+")
    c.setFillColor(W40)
    c.setFont("Mont", 10)
    c.drawString(175, sty+17, "contemplações realizadas pela administradora")

    c.setFillColor(GOLD_D)
    c.setFont("Mont-BoldItalic", 10)
    c.drawString(40, sty-35, "Quantas oportunidades você já perdeu por não saber que isso existia?")


# ============================================================
# PAGE 4 — INVESTIDORES NO EXTERIOR
# ============================================================
def p4(c):
    bg(c)
    foot(c, 4)

    # Avatar subtle right
    img(c, AVATAR_SIDE, W-190, H-215, 160, 165, 0.45)

    c.setFillColor(ELEC)
    c.setFont("Mont-Bold", 8)
    c.drawString(40, H-65, "CAPÍTULO 03 — PARA BRASILEIROS NO EXTERIOR")

    c.setFillColor(white)
    c.setFont("Mont-ExtraBold", 22)
    c.drawString(40, H-98, "Ganhe em dólar.")
    c.setFillColor(GOLD)
    c.setFont("Mont-ExtraBold", 22)
    c.drawString(40, H-125, "Construa patrimônio no Brasil.")

    c.setFillColor(W60)
    c.setFont("Mont", 10)
    c.drawString(40, H-152, "Seu salário em dólar compra até 5x mais imóvel no Brasil.")

    # DESTAQUE — R$ 1.000.000
    hy = H-265
    box(c, 40, hy, W-80, 90, brd=GOLD_D, fl=GOLD_BG)
    c.setFillColor(GOLD)
    c.setFont("Mont-Bold", 9)
    c.drawString(55, hy+70, "CARTA DE CRÉDITO DE R$ 1.000.000,00")

    c.setFillColor(white)
    c.setFont("Mont-SemiBold", 10)
    c.drawString(55, hy+48, "Mensal:")
    c.setFillColor(GOLD_L)
    c.setFont("Mont-ExtraBold", 16)
    c.drawString(120, hy+46, "R$ 6.365,98")
    c.setFillColor(white)
    c.setFont("Mont-SemiBold", 10)
    c.drawString(280, hy+48, "Em dólar:")
    c.setFillColor(ELEC)
    c.setFont("Mont-ExtraBold", 16)
    c.drawString(355, hy+46, "US$ 1.214,09")

    c.setFillColor(GREEN)
    c.setFont("Mont-Bold", 12)
    c.drawString(55, hy+18, "Apenas US$ 303,52 por semana")
    c.setFillColor(W40)
    c.setFont("Mont-Italic", 9)
    c.drawString(55, hy+4, "Menos que um dia de trabalho para muitos brasileiros nos EUA.")

    # TABELA
    ty = hy-25
    c.setFillColor(GOLD)
    c.setFont("Mont-Bold", 10)
    c.drawString(40, ty, "IMÓVEIS + RENDA AIRBNB: QUANTO CUSTA EM DÓLAR?")

    cols = [42, 152, 270, 388]
    headers = ["Crédito", "Parcela (R$)", "Em dólar (US$)", "Renda Airbnb"]
    rows = [
        ("R$ 300.000", "R$ 1.927/mês", "US$ 368/mês", "R$ 1.800/mês"),
        ("R$ 350.000", "R$ 2.248/mês", "US$ 429/mês", "R$ 2.100/mês"),
        ("R$ 500.000", "R$ 3.212/mês", "US$ 613/mês", "R$ 3.000/mês"),
        ("R$ 1.000.000", "R$ 6.365/mês", "US$ 1.214/mês", "R$ 6.000/mês"),
    ]

    thy = ty-22
    box(c, 40, thy-4, W-80, 20, brd=W15, fl=HexColor("#0a0e18"))
    c.setFillColor(GOLD)
    c.setFont("Mont-Bold", 8)
    for i, h in enumerate(headers):
        c.drawString(cols[i]+5, thy+2, h)

    for ri, row in enumerate(rows):
        ry = thy-24-ri*24
        fl = GOLD_BG if ri == 3 else SURF
        box(c, 40, ry-4, W-80, 22, brd=W15, fl=fl)
        colors = [white, W60, ELEC, GREEN]
        for ci, val in enumerate(row):
            c.setFillColor(colors[ci])
            c.setFont("Mont-Bold" if ci != 1 else "Mont", 9)
            c.drawString(cols[ci]+5, ry+2, val)

    # Semanal
    wy = thy-130
    c.setFillColor(GOLD)
    c.setFont("Mont-Bold", 10)
    c.drawString(40, wy, "QUANTO CUSTA POR SEMANA?")

    weekly = [
        ("R$ 300.000", "US$ 87/semana", "— menos que um jantar fora"),
        ("R$ 500.000", "US$ 146/semana", "— um turno de trabalho"),
        ("R$ 1.000.000", "US$ 303/semana", "— menos que um dia de trabalho"),
    ]
    for i, (cred, val, note) in enumerate(weekly):
        iy = wy-22-i*22
        c.setFillColor(white)
        c.setFont("Mont-Bold", 9)
        c.drawString(55, iy, cred)
        c.setFillColor(ELEC)
        c.setFont("Mont-Bold", 9)
        c.drawString(155, iy, val)
        c.setFillColor(W40)
        c.setFont("Mont-Italic", 9)
        c.drawString(275, iy, note)

    # Airbnb insight
    ay = wy-95
    box(c, 40, ay, W-80, 40, brd=HexColor("#14532D"), fl=GREEN_BG)
    c.setFillColor(GREEN)
    c.setFont("Mont-Bold", 10)
    c.drawString(55, ay+22, "O Airbnb paga o consórcio por você!")
    c.setFillColor(W40)
    c.setFont("Mont", 9)
    c.drawString(55, ay+6, "A renda cobre de 93% a 100% da parcela. Patrimônio que se paga sozinho.")

    c.setFillColor(GOLD)
    c.setFont("Mont-BoldItalic", 10)
    c.drawString(40, ay-28, "Enquanto você paga aluguel lá fora, poderia estar construindo patrimônio")
    c.drawString(40, ay-43, "no seu país. O câmbio está a seu favor. Até quando vai esperar?")

    c.setFillColor(W25)
    c.setFont("Mont", 7)
    c.drawString(40, ay-65, "* Câmbio: US$ 1 = R$ 5,24  •  Taxa admin 28,5% em 200 meses  •  Airbnb com 60% ocupação")


# ============================================================
# PAGE 5 — CTA (avatar strategy + logo)
# ============================================================
def p5(c):
    bg(c)

    # Avatar strategy — background center
    img(c, AVATAR_STRAT, W/2-110, H-400, 220, 280, 0.6)

    # Logo top center
    try:
        c.drawImage(LOGO, W/2-110, H-115, width=220, height=220*0.56, preserveAspectRatio=True, mask='auto')
    except:
        pass

    # Gold line under logo
    c.setStrokeColor(GOLD)
    c.setLineWidth(2)
    c.line(W/2-80, H-128, W/2+80, H-128)

    # Headline
    c.setFillColor(white)
    c.setFont("Mont-ExtraBold", 30)
    c.drawCentredString(W/2, H-178, "Agora que você sabe,")
    c.setFillColor(GOLD)
    c.setFont("Mont-ExtraBold", 30)
    c.drawCentredString(W/2, H-214, "o que vai fazer?")

    c.setFillColor(W60)
    c.setFont("Mont", 12)
    c.drawCentredString(W/2, H-258, "Cada mês que passa sem agir, são milhares de reais")
    c.drawCentredString(W/2, H-276, "perdidos em juros que vão direto para o banco.")

    c.setFillColor(W40)
    c.setFont("Mont", 11)
    c.drawCentredString(W/2, H-310, "Não espere entender tudo sozinho.")
    c.drawCentredString(W/2, H-326, "Fale com quem já ajudou centenas de pessoas.")

    # CTA Box
    cy = H-530
    box(c, 60, cy, W-120, 170, brd=GOLD_D, fl=GOLD_BG)

    c.setFillColor(GOLD)
    c.setFont("Mont-ExtraBold", 14)
    c.drawCentredString(W/2, cy+142, "FALE CONOSCO AGORA")

    c.setStrokeColor(GOLD_D)
    c.setLineWidth(0.5)
    c.line(100, cy+128, W-100, cy+128)

    lx = 90
    c.setFillColor(GREEN)
    c.setFont("Mont-Bold", 11)
    c.drawString(lx, cy+100, "WhatsApp:")
    c.setFillColor(white)
    c.setFont("Mont-Bold", 15)
    c.drawString(lx+95, cy+99, "+1 (716) 939-9340")

    c.setFillColor(GOLD)
    c.setFont("Mont-Bold", 11)
    c.drawString(lx, cy+72, "Instagram:")
    c.setFillColor(white)
    c.setFont("Mont", 13)
    c.drawString(lx+95, cy+72, "@seuplano.ofc")

    c.setFillColor(ELEC)
    c.setFont("Mont-Bold", 11)
    c.drawString(lx, cy+47, "Site:")
    c.setFillColor(white)
    c.setFont("Mont", 13)
    c.drawString(lx+95, cy+47, "oseuplano.com")

    c.setFillColor(W40)
    c.setFont("Mont", 10)
    c.drawCentredString(W/2, cy+22, "Simulador gratuito: oseuplano.com/simulador")

    # Clickable links
    c.linkURL("https://wa.me/17169399340", (lx, cy+95, lx+300, cy+115), relative=0)
    c.linkURL("https://instagram.com/seuplano.ofc", (lx, cy+67, lx+250, cy+85), relative=0)
    c.linkURL("https://oseuplano.com/simulador", (W/2-120, cy+15, W/2+120, cy+30), relative=0)
    c.linkURL("https://oseuplano.com", (lx, cy+42, lx+250, cy+60), relative=0)

    # Trust
    c.setFillColor(W25)
    c.setFont("Mont", 8)
    c.drawCentredString(W/2, cy-20, "Regulamentado pelo Banco Central do Brasil  •  Associada à ABAC")

    # Final phrase
    c.setFillColor(GOLD_L)
    c.setFont("Mont-BoldItalic", 17)
    c.drawCentredString(W/2, cy-58, "Informação é poder.")
    c.setFillColor(W40)
    c.setFont("Mont-BoldItalic", 17)
    c.drawCentredString(W/2, cy-80, "E poder é liberdade.")

    c.setStrokeColor(GOLD)
    c.setLineWidth(2)
    c.line(40, 40, W-40, 40)


# ============================================================
os.makedirs(os.path.dirname(OUT), exist_ok=True)
pdf = canvas.Canvas(OUT, pagesize=A4)
pdf.setTitle("O Seu Plano — Entenda o Jogo Antes de Entrar")
pdf.setAuthor("O Seu Plano")

p1(pdf); pdf.showPage()
p2(pdf); pdf.showPage()
p3(pdf); pdf.showPage()
p4(pdf); pdf.showPage()
p5(pdf); pdf.showPage()

pdf.save()
sz = os.path.getsize(OUT)
print(f"OK: {sz/1024:.0f} KB ({sz/1024/1024:.1f} MB)")
