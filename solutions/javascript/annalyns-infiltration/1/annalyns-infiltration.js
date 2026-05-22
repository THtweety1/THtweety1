
// Now help Annalyn free her best friend!
/**
 * The fast attack is available when the knight is sleeping
 *
 * @param {boolean} knightIsAwake
 * @return {boolean}
 */
export function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake;
}

/**
 * A useful spy captures information if at least one person is awake.
 *
 * @param {boolean} knightIsAwake
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 * @returns {boolean}
 */
export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake;
}

/**
 * You can signal the prisoner if the archer is asleep
 * and the prisoner is awake.
 *
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 * @returns {boolean}
 */
export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return !archerIsAwake && prisonerIsAwake;
}

/**
 * You can free the prisoner if:
 * - you have the pet dog and the archer is asleep
 * OR
 * - the prisoner is awake and both the knight and archer are asleep
 *
 * @param {boolean} knightIsAwake
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 * @param {boolean} petDogIsPresent
 * @returns {boolean}
 */
export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent,
) {
  return (
    (petDogIsPresent && !archerIsAwake) ||
    (prisonerIsAwake &&
      !knightIsAwake &&
      !archerIsAwake)
  );
}