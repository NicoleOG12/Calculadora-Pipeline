from subtracao import subtracao


def test_subtracao():
    assert subtracao(10, 5) == 5


def test_subtracao_negativos():
    assert subtracao(-10, -5) == -5


def test_subtracao_zero():
    assert subtracao(10, 0) == 10