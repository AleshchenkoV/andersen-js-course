/**
 * Реализовать функцию any в этом файле, и экспортировать ее.
 *
 * Первый аргумент - массив, второй - колбек-функция, которая применяется на массив
 * Колбек-функция применяется на каждый элемент массива и проверяет условие
 * Если хотя бы один раз колбек-функция вернула true, то any возвращает true
 * Иначе - false
 *
 * Если колбек-функция не была передана, то из any возвращаем true,
 * если в массиве есть хотя бы один элемент, который дает true,
 * если все значения в массиве дают false, то возвращаем false
 *
 * console.log(any([0, 1, 2, 0], x => x >= 2)); -> true
 * console.log(any([0, 0, 1, 0])); -> true
 * console.log(any([0, 0, 0, 0])); -> false
 */

// export function any(array, callback = undefined) {
//  if (!callback) {
//    return array.some(el => Boolean(el) === true);
//  }
//  return Boolean(array.filter(callback).length);
// }

const any = (array, callback) =>
  callback ? Boolean(array.filter(callback).length) : array.some(el => Boolean(el) === true);
// export default { any } from './array-practice/task1.js'
export default { any };
