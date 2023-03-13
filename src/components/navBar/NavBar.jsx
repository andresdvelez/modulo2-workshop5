import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const NavBar = () => {
    const { user } = useContext(AuthContext);
    // const { currentUser } = useContext(AuthContext);

    // const userLoggedIn = user.find(
    //     (userData) => userData.id === currentUser.id
    // );

    //has una funcion que sume dos numeros
    console.log(user);
    return (
        <section className=" px-10 py-1  bg-white w-screen fixed z-50">
            <nav className="flex items-center justify-between">
                <article>
                    <h1 className="text-xl font-bold">Home</h1>
                    <span>
                        ¡Qué bueno verte <span>{user?.name}!</span>
                    </span>
                </article>
                <figure className="w-10 h-10">
                    <img className="rounded-full" src={user?.image} alt="" />
                </figure>
            </nav>
        </section>
    );
};

export default NavBar;

// if (Array.isArray(user)) {
//     return (
//         <div>
//             <h1 className="text-7xl font-TilWarp">PiSassScript</h1>
//             {user.map((userData) => (
//                 <div key={userData.id}>
//                     <img src={userData.image} alt="User avatar" />
//                     <p>{userData.name}</p>
//                 </div>
//             ))}
//         </div>
//     );
// } else {
//     return <div>Loading...</div>;
// }
// };

// rotate-[215deg]
