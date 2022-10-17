import roomsRouter from './rooms.js'

function route(app) {
    app.use('/rooms', roomsRouter);
}

export default route;
