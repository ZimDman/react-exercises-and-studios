export default function HobbyLinks() {
    let hobbyLinks = ["https://boardgamegeek.com/","https://www.almanac.com/pruning-101-guide-pruning-trees-and-shrubs","https://www.guitarworld.com/"];
    
    return (
    <div>
        <h2>My favorite Hobbies</h2>
        <a href = {hobbyLinks[0]}>Board Games!</a><br></br>
        <a href = {hobbyLinks[1]}>Plants! Plants! and Plants!</a><br></br>
        <a href = {hobbyLinks[2]}>Guitar!</a>
    </div>
    );
};