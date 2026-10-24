"use client"

export function Button({ buttonText }: { buttonText: string}) {

    return (
        <button 
        className="px-2.5 py-1 bg-white text-black rounded-2x1"
        onClick={() => alert("Button clicked!")}>
        {buttonText}
        </button>
     )
}