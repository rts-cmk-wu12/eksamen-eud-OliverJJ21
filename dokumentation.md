# SwapHub
Oliver Jensen

WU12

Valgfri opgave: C

## Du kommer igang sådan her:
`npm install`

`npm start`

`npm run dev`

# Tech-stack

**Next.js**  
er et frontend framework baseret på React.js som blandt andet også giver adgang til serverside komponenter og actions samt mappebaseret routing. Serverside komponenter og funktioner giver en større sikkerhed fordi alt koden bliver afviklet på serveren fremfor i klienten.

**Git**  
er et versionsstyringsværktøj som lader mig lave branches og versioner af min kode så jeg let ka gå tilbage til tidligere versioner hvis jeg for eksempel har lavet en fejl. Jeg bruger Git sammen med Github

**React-icons**  
Er et library som er beregnet på React. Det giver dig adgang til en masse forskellige ikoner og pakkeikoner nemt og hurtigt.

**Sass/Scss**  
Er en styling metode som minder om css men mere advanceret eller en udvidelse af css hvor man blandt andet kan lave funktioner, variabler, mixins og nesting. Man kan også opdele sin CSS i moduler og dermed kan man genbruge kode flere steder.

**Zod**  
Et valideringsbibliotek til objekter og strings. Jeg bruger Zod i denne opgave til at validerer det brugeren skriver i mine formularer

**React Toastify**  
er et library som er ekstremt nemt at installerer til brug af notifikationer/popup beskeder når brugeren fx submitter en form logger ind eller andet. Der både error, success, loading, og warning notifikationer. Designet er simpelt og man har mulighed for selv at designe det med deres style guide. Toastify har også light og darkmode og man kan skifte placeringen af notifikationen meget nemt og hurtigt.

## Kode-eksempel
SearchForm komponent (components/searchbar/index.jsx)
```jsx
"use client"

import Link from "next/link"
import { useState } from "react"
import "../header/header.scss"
import logoutAction from "@/actions/logout"
import { redirect } from "next/navigation"



export default function AuthButtons({ LoggedIn }) {
    const [isLoggedIn, setIsLoggedIn] = useState(LoggedIn)

    const handleLogout = async () => {
        await logoutAction()
        setIsLoggedIn(false)
        redirect("/profile");
    }

    return (
        <div className="navbar-links__buttons">
            {isLoggedIn ? (
                <>
                    <button className="sign-out" onClick={handleLogout}>Log out</button>
                    <Link className="register" href="/profile">Profile</Link>
                </>
            ) : (
                <>
                    <Link className="sign-in" href="/sign-in">Sign in</Link>
                    <Link className="register" href="/register">Register</Link>
                </>
            )}
        </div>
    )
}
```

Komponentet tager en prop "LoggedIn" som fortæller om brugeren allerede er logget ind.

**ligeefter bruger jeg en useState som er en react hook der retunere et array og som har 2 elementer hvor det første element er et state og det næste er en setter til staten og useState tager også imod et argument der bliver kaldt "initialState" som styre værdien for start.**

Det første element er "isLoggedIn" som holder styr på login statussen og det andet element "setIsLoggedIn" er setter funktionen som jeg bruger til at opdatere den. InitialState kommer fra LoggedIn proppen.

**async funktion giver dig mulighed for at vente på noget data fra serveren uden at stoppe hele processen**

jeg har lavet en funktion "handleLogout" som er async fordi den kalder logoutAction() der kommunikere med serveren for at logge brugeren ud.

**await venter altid på et promise**

jeg venter med await på at logud processen er færdig og jeg opdaterer isLoggedIn til false og sender brugeren til profil siden med redirect("/profile") hvor brugeren så ville blive nød til at logge ind igen.

**Ternary operator er: betingelse ? hvis betingelse er true : hvis betingelse er false, og den skal sidestilles med en function der returnerer enden true eller false (Boolean)**

i jsx returnere jeg "isLoggedIn" med en ternary operator og hvis isLoggedIn er true viser jeg en logud knap som der kalder "handleLogout" og en anden knap til profil siden og hvis "isLoggedIn" er false viser jeg knapperne til "Sign in" og "Register"
