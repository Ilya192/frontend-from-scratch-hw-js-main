/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/


function findUniqueElements(array) {
    const uniqueElements = []; // Создаем новый массив для уникальных элементов
    for (let i = 0; i < array.length; i++) {
        // Проверяем, содержится ли элемент уже в массиве уникальных элементов
        if (!uniqueElements.includes(array[i])) {
            uniqueElements.push(array[i]); // Если нет, добавляем его
        }
    }
    return uniqueElements; // Возвращаем массив уникальных элементов
}

// Пример использования
console.log(findUniqueElements([1, 2, 3, 2, 1, 4])); // вернёт [1, 2, 3, 4]
console.log(findUniqueElements(['apple', 'banana', 'apple', 'cherry'])); // вернёт ['apple', 'banana', 'cherry']
console.log(findUniqueElements([true, false, true, false, true])); // вернёт [true, false]
