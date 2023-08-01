import { Request, Response } from 'express';
import pool from '../models/user.model';

type Context = {
  req: Request;
  res: Response;
};

const User = {
  Query: {
    findManyUsers: async (root: any, args: any, context: Context) => {
      try {
        const users = await pool.query('SELECT * FROM users');
        console.log({
          code: 200,
          success: true,
          data: users[0],
          message: 'success get all users',
        });
        return users[0];
      } catch (err) {
        throw err;
      }
    },
    findOneUser: async (
      root: any,
      { id }: { id: string },
      context: Context
    ) => {
      try {
        const user = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
        console.log({
          code: 200,
          success: true,
          data: user[0],
          message: 'success get user by id',
        });
        return user[0];
      } catch (err) {
        throw err;
      }
    },
  },
  Mutation: {
    createOneUser: async (
      root: any,
      {
        name,
        email,
        password,
      }: { name: string; email: string; password: string },
      context: Context
    ) => {
      try {
        const user = await pool.query(
          'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
          [name, email, password]
        );
        console.log({
          code: 200,
          success: true,
          data: user[0],
          message: 'success create new user',
        });
        return user[0];
      } catch (err) {
        throw err;
      }
    },
    updateOneUser: async (
      root: any,
      {
        id,
        name,
        email,
        password,
      }: { id: string; name: string; email: string; password: string },
      context: Context
    ) => {
      try {
        const user = await pool.query(
          'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?',
          [name, email, password, id]
        );
        console.log({
          code: 200,
          success: true,
          data: user[0],
          message: 'success update user by id',
        });
        return user[0];
      } catch (err) {
        throw err;
      }
    },
    removeOneUser: async (
      root: any,
      { id }: { id: string },
      context: Context
    ) => {
      try {
        const user = await pool.query('DELETE FROM users WHERE id = ?', [id]);
        console.log({
          code: 200,
          success: true,
          data: user[0],
          message: 'success delete user by id',
        });
        return user[0];
      } catch (err) {
        throw err;
      }
    },
  },
};

export default User;
