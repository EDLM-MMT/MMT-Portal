import { useState } from "react";

export default function Checkbox({ label, value, name, onChange, index, testid }) {

    return (
        <label>
            <input
                type="checkbox"
                id={`custom-checkbox-${index}`}
                name={name}
                checked={value}
                onChange={onChange}
                data-testid={testid}
            />
            {label}
        </label>
    );
}
