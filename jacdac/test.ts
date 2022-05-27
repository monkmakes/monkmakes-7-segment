let i = 0
input.onButtonPressed(Button.A, () => i = 0)
forever(() => {
    modules.monkMakes7Segment.setNumber(i++)    
    pause(100)
})