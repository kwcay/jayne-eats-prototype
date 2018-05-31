"""
Food/Ingredient pivot table
"""
from .abstract import AbstractTable


class FoodIngredientPivot(AbstractTable):
    tableName = 'food_ingredient'

    createStatement = """
        CREATE TABLE {tableName} (
            id INTEGER PRIMARY KEY,
            food_id INTEGER NOT NULL REFERENCES foods(id),
            ingredient_id INTEGER NOT NULL REFERENCES ingredients(id)
        )
        """
