import { Location, SimulationOptions } from "./types";
declare class Simulation {
    private readonly context;
    private world;
    private rover;
    private wheelConstraints;
    private engines;
    private readonly loop;
    private offset;
    private trace;
    private markers;
    private obstacles;
    private readonly renderingOptions;
    private readonly physicalOptions;
    private lastRenderTime;
    private startTime;
    private interval;
    private animationFrame;
    constructor(simulationOptions: SimulationOptions);
    private createCanvas;
    private initMarkers;
    private initObstacles;
    getRoverHeading(): number;
    getRoverLocation(): Location;
    start(): void;
    stop(): void;
    private trackPosition;
    private animate;
}
export { Simulation, SimulationOptions };
