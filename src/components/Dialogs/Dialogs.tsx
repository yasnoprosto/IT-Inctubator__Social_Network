import s from "./Dialogs.module.css";
import {DialogUsers} from "./Dialog/DialogUsers";
import {DialogMessages} from "./Dialog/DialogMessages";

export const Dialogs = () => {
    return (
        <div className={s.container}>
            <div>
            <DialogUsers id={1} name={"Denis"}/>
            <DialogUsers id={2} name={"Alex"}/>
            <DialogUsers id={3} name={"Michael"}/>
            <DialogUsers id={4} name={"Ludovic"}/>
            <DialogUsers id={5} name={"Cinderella"}/>
            </div>
            <div>
                <DialogMessages message={"Hello"}/>
                <DialogMessages message={"How are u "}/>
                <DialogMessages message={"I love y'all"}/>
                <DialogMessages message={"So..."}/>
                <DialogMessages message={"Let's fun"}/>
            </div>
        </div>
    );
};