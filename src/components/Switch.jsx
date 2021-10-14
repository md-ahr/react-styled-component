import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

const Switch = () => {

    const { theme,  toggleTheme} = useContext(ThemeContext);

    return (
        <p>
            <input type="checkbox" value={theme} onChange={toggleTheme} />
            <span className="slider round"></span>
        </p>
    )

}

export default Switch;
