'use client'

import React, { useState } from 'react';
import { View, Reshaped, TextField, Text } from 'reshaped';
import 'reshaped/themes/reshaped/theme.css';

export default function Home() {
  const [email, setEmail] = useState<string>("");

  const handleChange = ({ value }: { value: string; name: string; event?: React.ChangeEvent<HTMLInputElement> }) => {
    setEmail(value);
  };

  return (
    <Reshaped theme="reshaped">
      <View padding={12} direction='column' align='center' gap={8}>
        <Text variant='featured-2' align='center'>Click the input field, a very off-center autofill popover should open. View Desktop full screen for maximum effect.</Text>
        <Text>Present on reshaped 2.4.2, more pronounced on 2.4.4</Text>
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
