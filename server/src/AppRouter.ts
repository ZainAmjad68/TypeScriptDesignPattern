import express from "express";

export class AppRouter {                // Singleton Class, returns the reference to Router that'll be used throughout the App
    private static instance: express.Router;

    static getInstance(): express.Router {
        if (!AppRouter.instance) {
            AppRouter.instance = express.Router();
        }
        return AppRouter.instance;
    }
}