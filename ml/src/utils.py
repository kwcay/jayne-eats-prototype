import unicodedata

def normalize_text(text):
    try:
        text = unicode(text, 'utf-8')
    except NameError:
        pass

    text = unicodedata\
        .normalize('NFD', text)\
        .encode('ascii', 'ignore')\
        .decode('utf-8"')

    return str(text).strip().lower()
