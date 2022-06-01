let selected_interests = [];

function reset_interests(){
    selected_interests = [];
}

function changeInterests(interest){
    for (let i = 0; i < selected_interests.length; i++) {
        if (selected_interests[i] == interest){
            console.log("deleting");
            document.getElementById(interest).className="unselected";
            selected_interests = selected_interests.filter((y)=>y!=interest);
            return;
        }
    }
    selected_interests.push(interest);
    console.log(selected_interests);
    document.getElementById(interest).className="selected";
}

function getInterests() {
    return selected_interests;
    selected_interests=[]
}

export {getInterests, changeInterests, reset_interests}