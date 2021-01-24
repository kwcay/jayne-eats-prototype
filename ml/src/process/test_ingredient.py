from .ingredient import process_ingredient


def test_process_ingredient():
    assert process_ingredient('Cheese') == 'cheese'
    assert process_ingredient('Blue cheese') == 'blue cheese'
    assert process_ingredient('Cheddar cheese') == 'cheese'
    assert process_ingredient('Mozzarella') == 'cheese'

    assert process_ingredient(['Mozzarella', 'Tomato']) == ['cheese', 'tomato']
    assert process_ingredient(['Tomato', 'Mozzarella']) == ['cheese', 'tomato']
