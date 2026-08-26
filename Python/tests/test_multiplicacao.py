from multiplicacao import multiplicacao


def test_multiplicacao():
    assert multiplicacao(10, 5) == 50


def test_multiplicacao_negativos():
    assert multiplicacao(-10, -5) == 50


def test_multiplicacao_por_zero():
    assert multiplicacao(10, 0) == 0