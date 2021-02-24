import * as tf from '@tensorflow/tfjs';
import { memoize } from 'lodash';

import { SAVED_MODEL_URL } from './constants';

async function loadModel() {
  return tf.loadGraphModel(SAVED_MODEL_URL);
}

const memoizedLoadModel = memoize(loadModel);

export default async function infer() {
  const model = await memoizedLoadModel();
  const sample = tf.tensor([1, 2, 3]);
  const result = model.execute(sample);

  return result;
}
