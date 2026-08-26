from soma import soma


def test_soma():
    assert soma(10, 5) == 15


def test_soma_negativos():
    assert soma(-10, -5) == -15


def test_soma_zero():
    assert soma(10, 0) == 10