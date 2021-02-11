"""
Food/Ingredient pivot table
"""
from .abstract import AbstractTable


class FoodIngredientPivot(AbstractTable):
    table_name = 'food_ingredient'

    create_statement = """
        CREATE TABLE {table_name} (
            id INTEGER PRIMARY KEY,
            food_id INTEGER NOT NULL REFERENCES foods(id),
            ingredient_id INTEGER NOT NULL REFERENCES ingredients(id)
        )
        """
