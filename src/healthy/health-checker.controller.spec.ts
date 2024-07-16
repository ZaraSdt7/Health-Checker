import { Test, TestingModule } from '@nestjs/testing'
import { HealthCheckerController } from './health-checker.controller'


describe('HealthCheckerController', () =>
{
    let controller: HealthCheckerController

    beforeEach(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ HealthCheckerController ],

        }).compile()

        controller = module.get<HealthCheckerController>(HealthCheckerController)
    })

    it('should be defined', () =>
    {
        expect(controller).toBeDefined()
    })
})
