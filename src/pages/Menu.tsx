import GetName from "../components/GetName";
import Header from "../components/Header";
import MenuList from "../components/MenuList";
import { useState, useEffect } from 'react';

export default function Menu() {
    const [name, setName] = useState<string>('-');
    const [askName, setAskName] = useState<boolean>(true);

    useEffect(() => {
        if (name.length > 2) {
            setAskName(false);
        }
    }, [name]);

    const handleGetName = (enteredName: string): void => {
        setName(enteredName);
        setAskName(false);
    };

    return (
        <>
            {askName &&
                <GetName getName={handleGetName} />
            }
            <div className="px-4 py-3 h-screen">
                <Header name={name} />
                <MenuList />
            </div>
        </>
    );
}
