/*
 * Corriger la fonction minMax()
 * La fonction récupère un tableau de nombres positifs, négatifs ou nuls
 * Et retourne un tableau à 2 entrées contenant la valeur minimale
 * et la valeur maximale du tableau récupéré en entrée
 *
 * Exemple 1 :
 * Tableau d'entrée : [4, 6, 35, -65, -9, 0, 67]
 * Résultat : [-65, 67]
 *
 * Exemple 2 :
 * Tableau d'entrée : [-30, 5, 43, 108, -5, -7, 89]
 * Résultat : [-30, 108]
 *
 * Exemple 3 :
 * Tableau d'entrée : [56, 7, 63, 9, 7, 12, 85]
 * Résultat : [7, 85]
 */

var minMax = arrayIn => {
  const arrayOut = [];
  let min = arrayIn[0];
  let max = arrayIn[0];

  for (let i = 0; i < arrayIn.length; i++) {
    if (arrayIn[i] < min) {
      min = arrayIn[i];
    }
    if (arrayIn[i] > max) {
      max = arrayIn[i];
    }
  }
  arrayOut.push(min, max);
  return arrayOut;
};
