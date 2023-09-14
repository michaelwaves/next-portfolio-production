import UnderLine from "./UnderLine"
export default function About() {
    return (
        <p className="md:text-2xl text-lg">
            Hi there. I&#39;m Michael, startup and tech enthusiast passionate about AI, Web3, and biotech. I&#39;m currently interning
            at a clinical stage<UnderLine text="pharmaceutical startup" href="https://cloudbreakpharma.com/" />and building
            a<UnderLine text="blockchain patent marketplace" href="https://trademint.org" />as part of the inaugural MLH Web3 Fellowship.
            In my spare time I like to play badminton, cook tasty food, and build websites.
            Welcome to my corner of the internet :&#41;
        </p>
    )
}