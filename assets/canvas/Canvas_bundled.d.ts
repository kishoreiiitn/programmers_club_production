// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   victor

declare module 'Canvas' {
    import { Shape } from 'Canvas/Shapes';
    export class Canvas {
            readonly height: number;
            readonly width: number;
            /**
                * Create Canvas.
                * @param elem valid DOM canvas element.
                * @param renderIndefinite set to false, if fine grained control
                * of operations is necessary between Canvas renders. Set
                * to true otherwise. Defaults false.
                */
            constructor(elem: HTMLCanvasElement, renderIndefinite?: boolean);
            /**
                * Adds a shape object to Canvas.
                * @param obj valid Shape object.
                */
            addObject(obj: Shape): void;
            /**
                * Remove shape obj from current Canvas.
                * @param obj Object to be removed.
                */
            removeObject(obj: Shape): void;
            /**
                * Check if object is in bounds of canvas viewport.
                * @param obj
                */
            isInViewPort(obj: Shape): boolean;
            /**
                * Renders canvas iterating through all the objects.
                */
            render(): void;
            readonly isPaused: boolean;
            pause(): void;
            resume(): void;
    }
}

declare module 'Canvas/Shapes' {
    import { Point } from 'Canvas/Point';
    export interface IDimension {
        x: number;
        y: number;
        width: number;
        height: number;
    }
    /**
      * Base Class for all types of shapes that can be
      * added to Canvas library.
      */
    export abstract class Shape {
        protected curPosition: Point;
        protected _move: {
            position: Point;
            unit: number;
            callback?: (from?: Point) => void;
        };
        abstract render(context: CanvasRenderingContext2D, baseUnit: number): void;
        abstract moveTo(x: number, y: number, unit?: number, onFinish?: (from: Point) => void): void;
        abstract getDimensions(): IDimension;
        isOverlap(obj: Shape): boolean;
    }
    export { Rectangle } from 'Canvas/Shapes/Rectangle';
    export { Circle } from 'Canvas/Shapes/Circle';
}

declare module 'Canvas/Point' {
    import Victor = require('victor');
    export class Point extends Victor {
    }
}

declare module 'Canvas/Shapes/Rectangle' {
    import { IDimension, Shape } from 'Canvas/Shapes';
    import { Point } from 'Canvas/Point';
    export class Rectangle extends Shape {
            /**
                * Initialize Rectangle object with height, width and color.
                * @param width
                * @param height
                * @param color
                */
            constructor(width: number, height: number, color: string);
            /**
                * Sets the position of Rectangle.
                * @param x
                * @param y
                */
            setPosition(x: number, y: number): this;
            /**
                * Renders the object on canvas context.
                * @param context Canvas context object.
                * @param baseUnit Canvas offset unit.
                */
            render(context: CanvasRenderingContext2D, baseUnit: number): this;
            /**
                * Move Rectangle to new position.
                * @param x
                * @param y
                * @param unit 0 to move instantly or specify a number to animate.
                * @param onFinish Callback function to call after movement is complete.
                */
            moveTo(x: number, y: number, unit?: number, onFinish?: (from: Point) => void): this;
            /**
                * Get the current dimensions of rectangle.
                */
            getDimensions(): IDimension;
    }
}

declare module 'Canvas/Shapes/Circle' {
    import { IDimension, Shape } from 'Canvas/Shapes';
    import { Point } from 'Canvas/Point';
    export class Circle extends Shape {
            /**
                * Initialize Circle object with height, width and color.
                * @param width
                * @param height
                * @param color
                */
            constructor(radius: number, color: string, shadowBlur?: number);
            /**
                * Sets the position of Circle.
                * @param x
                * @param y
                */
            setPosition(x: number, y: number): this;
            /**
                * Renders the object on canvas context.
                * @param context Canvas context object.
                * @param baseUnit Canvas offset unit.
                */
            render(context: CanvasRenderingContext2D, baseUnit: number): this;
            /**
                * Move Circle to new position.
                * @param x
                * @param y
                * @param unit 0 to move instantly or specify a number to animate.
                * @param onFinish Callback function to call after movement is complete.
                */
            moveTo(x: number, y: number, unit?: number, onFinish?: (from: Point) => void): this;
            /**
                * Get the current dimensions of Circle.
                */
            getDimensions(): IDimension;
    }
}

