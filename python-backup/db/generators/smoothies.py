from typing import Union

def smoothies(Model):
    # Fantastic smoothies
    great_flavours = [
        ('Mango'),
    ]

    for details in great_flavours:
        name, ingredients = _extract_details(details)
        name = f'{name} Smoothie'
        ingredients += ['milk']

        yield Model(name=name, ingredients=ingredients, score=4, state='liquid')

    # Generic smoothies
    # for details in types:
    #     name, ingredients = _extract_details(details)
    #     name = f'{name} Smoothie'
    #     ingredients += ['milk']

    #     yield Model(name=name, ingredients=ingredients, score=3, state='liquid')

def _extract_details(details: Union[tuple, str]) -> tuple:
    if type(details) is str:
        name = details
        ingredients = [details]
    elif type(details) is tuple and len(details) == 2:
        name, ingredients = details
    else:
        raise Exception('Unknown smoothie')

    return (name, ingredients)
