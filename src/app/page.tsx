'use client'

import React, { useState } from 'react';
import { View, Reshaped, TextField, Text} from 'reshaped';
import 'reshaped/themes/reshaped/theme.css';

export default function Home() {
  const [email, setEmail] = useState<string>("");

  const handleChange = ({ value }: { value: string; name: string; event?: React.ChangeEvent<HTMLInputElement> }) => {
    setEmail(value);
  };

  return (
    <Reshaped theme="reshaped">
        <View padding={12} direction='column' align='center' gap={8}>
          <Text variant='featured-2' align='center'>Autofill input field with a value saved in your browser to see error. Open developer tools/console if needed.</Text>
            <TextField
              size='large'
              name="email"
              placeholder="your.email@gmail.com"
              value={email}
              onChange={handleChange}
            />
        </View>
    </Reshaped>
  );
}
