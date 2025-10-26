import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';

/**
 * Controller responsible for handling requests to the application's root route (`/`).
 *
 * @class
 * @description
 * The `AppController` serves as the entry point for basic application routes.
 * It delegates business logic to the {@link AppService}.
 *
 * @example
 * // Example usage
 * const controller = new AppController(new AppService());
 * controller.getHello(); // Returns "Hello World!"
 */
@Controller()
export class AppController {
  /**
   * Creates an instance of AppController.
   *
   * @param {AppService} appService - The service that provides application logic and responses.
   */
  constructor(private readonly appService: AppService) {}

  /**
   * Handles a GET request to the root path (`/`).
   *
   * @returns {string} The "Hello World" message returned from {@link AppService.getHello}.
   *
   * @example
   * // Returns the greeting message
   * appController.getHello(); // "Hello World"
   *
   * @swagger
   * @operationId getHello
   * @summary Get Hello World message
   * @response 200 - Successful response containing the greeting message.
   */
  @Get()
  @ApiOperation({ summary: 'Get Hello World message' })
  @ApiResponse({ status: 200, description: 'Successful response' })
  getHello(): string {
    return this.appService.getHello();
  }
}
