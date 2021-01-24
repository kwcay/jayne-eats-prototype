from .utils import normalize_text


def test_normalize_text():
    assert normalize_text('âàçéêèîôû') == 'aaceeeiou'
    assert normalize_text(' Â àÀ   ') == 'a aa'
