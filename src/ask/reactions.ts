import * as faces from '../shared/assets/faces';

interface ReactionSet {
  facepalming: string;
  frowning: string;
  gesturingNotOk: string;
  gesturingOk: string;
  peace: string;
  pouting: string;
  prayerHands: string;
  raisedHands: string;
  raisingHand: string;
  shrugging: string;
  smiling: string;
  thinkingPose?: string;
  thumbsDown: string;
  thumbsUp: string;
}

/**
 * Reaction set: Jayne.
 */
export const jayneReactionSet: ReactionSet = {
  facepalming: faces.jayneFacepalmingSrc,
  frowning: faces.jayneFrowningSrc,
  gesturingNotOk: faces.jayneGesturingNotOkSrc,
  gesturingOk: faces.jayneGesturingOkSrc,
  peace: faces.jaynePeaceSrc,
  pouting: faces.jaynePoutingSrc,
  prayerHands: faces.jaynePrayerHandsSrc,
  raisedHands: faces.jayneRaisedHandsSrc,
  raisingHand: faces.jayneRaisingHandSrc,
  shrugging: faces.jayneShruggingSrc,
  smiling: faces.jayneSmilingSrc,
  thinkingPose: faces.jayneThinkingPoseSrc,
  thumbsDown: faces.jayneThumbsDownSrc,
  thumbsUp: faces.jayneThumbsUpSrc,
};

export const JAYNE_REACTION_SET = 'Jayne reaction set';

/**
 * Reaction set: Woman, medium-dark skin tone.
 */
export const mdwReactionSet: ReactionSet = {
  facepalming: faces.mdwFacepalmingSrc,
  frowning: faces.mdwFrowningSrc,
  gesturingNotOk: faces.mdwGesturingNotOkSrc,
  gesturingOk: faces.mdwGesturingOkSrc,
  peace: faces.mdwPeaceSrc,
  pouting: faces.mdwPoutingSrc,
  prayerHands: faces.mdwPrayerHandsSrc,
  raisedHands: faces.mdwRaisedHandsSrc,
  raisingHand: faces.mdwRaisingHandSrc,
  shrugging: faces.mdwShruggingSrc,
  smiling: faces.mdwSmilingSrc,
  thumbsDown: faces.mdwThumbsDownSrc,
  thumbsUp: faces.mdwThumbsUpSrc,
};

export const MDW_REACTION_SET = 'Woman, medium-dark skin tone reaction set';

export type ReactionSetKey =
  | typeof JAYNE_REACTION_SET
  | typeof MDW_REACTION_SET;

export const reactionSets: Map<ReactionSetKey, ReactionSet> = new Map([
  [JAYNE_REACTION_SET, jayneReactionSet],
  [MDW_REACTION_SET, mdwReactionSet],
]);

export function getIdleReactions(reactionSet: ReactionSet) {
  return [reactionSet.peace, reactionSet.raisingHand, reactionSet.smiling];
}

export function getNegativeReactions(reactionSet: ReactionSet) {
  return [
    reactionSet.facepalming,
    reactionSet.frowning,
    reactionSet.gesturingNotOk,
    reactionSet.pouting,
    reactionSet.thumbsDown,
  ];
}

export function getPositiveReactions(reactionSet: ReactionSet) {
  return [
    reactionSet.gesturingOk,
    reactionSet.prayerHands,
    reactionSet.raisedHands,
    reactionSet.thumbsUp,
  ];
}

export function getThinkingReactions(reactionSet: ReactionSet) {
  return reactionSet.thinkingPose
    ? [reactionSet.thinkingPose]
    : [reactionSet.smiling];
}

export function getUnknownReactions(reactionSet: ReactionSet) {
  return [reactionSet.shrugging];
}
