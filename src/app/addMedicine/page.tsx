'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Select, MenuItem, FormControl, InputLabel, Button } from '@mui/material';

const MedicineForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <div>
      <h1>お薬追加</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField {...register('medicineName')} label="お薬名" fullWidth margin="normal" />

        <FormControl fullWidth margin="normal">
          <InputLabel id="takeTime-label">飲む時間</InputLabel>
          <Select {...register('takeTime')} labelId="takeTime-label">
            {Array.from(Array(Math.floor(24 * 12 / 5))).map((_, index) => {
              const hour = Math.floor(index * 5 / 60);
              const minute = index * 5 % 60;
              const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
              return <MenuItem key={index} value={time}>{time}</MenuItem>;
            })}
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel id="notificationTime-label">通知時間</InputLabel>
          <Select {...register('notificationTime')} labelId="notificationTime-label">
            <MenuItem value={5}>5分前</MenuItem>
            <MenuItem value={10}>10分前</MenuItem>
            <MenuItem value={15}>15分前</MenuItem>
          </Select>
        </FormControl>

        <TextField {...register('remindCount')} label="リマインド回数" type="number" fullWidth margin="normal" />

        <Button type="submit" variant="contained" color="primary">送信</Button>
      </form>
    </div>
  );
};

export default MedicineForm;