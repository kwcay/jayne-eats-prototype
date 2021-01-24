"""
Processes ingredients.
"""
from typing import Union
from ..data import CHEESES_NORMALIZED as CHEESES
from ..utils import normalize_text as normalize


def process_ingredient(original: Union[list, str]) -> Union[list, str]:
    """
    Processes one or more ingredient names.

    Ingredients should be as general as possible and only be specific when we
    know Jayne doesn't like them (i.e. negatively impacts a dish).

    For example, Jayne generally likes cheeses but not blue cheese. Therefore
    any cheese, no matter the type, should be converted to either "cheese" or
    "blue cheese".
    """
    if type(original) == list:
        return sorted(list(set(map(lambda i: process_ingredient(i), original))))

    if type(original) != str:
        return original
    
    ingredient = original

    for processor in _PROCESSORS:
        ingredient = processor(ingredient)
    
    return ingredient


def _cheese(ingredient):
    name = ingredient.replace('cheese', '').strip()
    disliked_cheeses = ('blue',)

    if name in disliked_cheeses:
        return ingredient
    elif name in CHEESES:
        return 'cheese'

    return ingredient


_PROCESSORS = (
    normalize,
    _cheese,
)
