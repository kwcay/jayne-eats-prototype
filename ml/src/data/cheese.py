from ..utils import normalize_text

CHEESES = (
    'Blue',
    'Cheddar',
    'Cottage',
    'Mozzarella',
    'Oka',
    'Swiss'
    'Wagasi',
)

CHEESES_NORMALIZED = list(map(normalize_text, CHEESES))
