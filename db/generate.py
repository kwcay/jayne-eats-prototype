"""
Generates food records.
"""
from generators.all import generators
from schema.food import FoodModel, FoodsTable


def generate(**kwargs):
    # Foods table handler
    foods = FoodsTable()

    # Iterate through each generator
    for gen in generators:
        for food in gen(FoodModel):
            # Create the Food record
            try:
                print(f'Adding "{food.name}"...')
                foods.add(food)
            except Exception as e:
                print(e)


if __name__ == '__main__':
    exit(generate())
