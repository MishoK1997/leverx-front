import { useState } from "react";
import { BurgerIcon, QuestionMarkIcon, CloseIcon } from "../icons/ListIcons";
import Nav from "../header/Nav"; 

interface BurgerMenuProps {
    firstName: string;
    lastName: string;
    avatar: string;
    onSignOut: () => void;
}

export default function BurgerMenu({ 
    firstName, 
    lastName, 
    avatar, 
    onSignOut,
}: BurgerMenuProps) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>  
            <button 
                className={`burger-btn ${isMenuOpen ? "active" : ""}`} 
                id="burgerToggle" 
                onClick={toggleMenu}
            >
                {isMenuOpen ? <CloseIcon /> : <BurgerIcon />}
            </button>

            <div 
                className={`burger-overlay ${isMenuOpen ? "open" : ""}`} 
                onClick={closeMenu}
            />

            <div className={`burger-menu ${isMenuOpen ? "open" : ""}`} id="burgerMenu">
                <div className="burger-menu-content">
                    
                    <div className="burger-profile">
                        <img 
                            src={avatar} 
                            alt="Profile" 
                            className="burger-avatar" 
                        />
                        <div className="burger-user-info">
                            <span className="burger-username">
                                {firstName} {lastName}
                            </span>
                            <button className="burger-signout brg-btns" onClick={onSignOut}>
                                Sign out
                            </button>
                        </div>
                    </div>

                    <Nav 
                        className="burger-nav-links" 
                        closeMenu={closeMenu} 
                    />

                    <button className="mob-support brg-btns">
                        <QuestionMarkIcon />
                        <span className="btn-text">SUPPORT</span>
                    </button>
                
                </div>
            </div>
        </>
    );
}