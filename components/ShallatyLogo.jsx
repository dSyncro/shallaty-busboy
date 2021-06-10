import React from 'react';
import Logo from '../public/svg/shallaty.svg';

export default function ShallatyLogo() {
    return (
        <div className="flex flex-col items-center">
            <Logo className="fill-current w-16 h-16 m-4" viewBox="0 0 24 24" preserveAspectRatio="none" />
            <h1 className="text-5xl">shallaty</h1>
        </div>
    )
}
