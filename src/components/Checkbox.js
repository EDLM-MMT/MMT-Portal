import { useState } from "react";

export default function Checkbox({ label, value, onChange, index }) {

    return (
        <label>
            <input
                type="checkbox"
                id={`custom-checkbox-${index}`}
                checked={value}
                onChange={onChange}
            />
            {label}
        </label>
    );
}
