import pytest

from divisao import divisao


def test_divisao():
    assert divisao(10, 2) == 5


def test_divisao_decimal():
    assert divisao(5, 2) == 2.5


def test_divisao_por_zero():
    with pytest.raises(ValueError):
        divisao(10, 0)