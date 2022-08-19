const skillsContainer = document.getElementById('skills-container')

const unscubscribeScroll = useScroll(
    skillsContainer.offsetTop - 100,
    () => {
        console.log('chegamos')
        unscubscribeScroll()
    }
)