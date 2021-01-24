References:

- [Introduction to Machine Learning Problem Framing](https://developers.google.com/machine-learning/problem-framing/big-questions)
- [What Output Would You Like the ML Model to Produce?](https://developers.google.com/machine-learning/problem-framing/framing#what-output-would-you-like-the-ml-model-to-produce)

## Research goal

Predict whether Jayne will enjoy a given dish or not.

##  Hypothesis

Informative signals will consist of:

- Ingredients.
- Temperature (warm, room temperature, cool).
- Consistency:
    - Crunchy
    - Chewy
    - Mashed
    - Solid (not crunchy or chewy or mashed) 
    - Thick liquid (TBD, e.g. smoothie)
    - Liquid

## Product of ML task

Multi-class single-label classification:

1. Jayne will enjoy the dish.
2. Jayne will have the dish if necessary.
3. Jayne will not have the dish.

## Model

Try a mixture of tree-based, instance-based, and kernel-based models ([Choosing a Machine Learning Model](https://towardsdatascience.com/part-i-choosing-a-machine-learning-model-9821eecdc4ce)).
