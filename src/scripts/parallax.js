//-найти всю сцену параллакса и сохранить в переменную
const parallax =document.querySelector('.parallax')
//-сохранить все слои, для этого у параллакса взять всех потомков
const layers =parallax.children

//-создать функцию, в которуюю будем передавать положение скролла
function moveLayersDependsOnScroll(wScroll) {
    //-перебрать все слои
    Array.from(layers).forEach(layer => {

        //-слои должны сдвигаться на разный шаг сменьшей скоростью, чем скролл
        //для этого слоям добавить дата-атрибут с коэфф. от 0 до 1
        const divider = layer.dataset.speed

        //-коэффицент смещения
        const strafe = wScroll * divider / 25
        //-прменим в качестве свойства transform с отрицателным значением
        //-т.к. смещаем слои вверх в %
        layer.style.transform = `translateY(-${strafe}%)`
    })
}

//-применить эту функцию в качестве обработчика события "скролл"
window.addEventListener('scroll', e => {
    //-получить значение скролла из у-оффсет
    const wScroll = window.pageYOffset

    moveLayersDependsOnScroll(wScroll)
})