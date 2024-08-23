/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Task } from "./Task";
import { TaskCountArgs } from "./TaskCountArgs";
import { TaskFindManyArgs } from "./TaskFindManyArgs";
import { TaskFindUniqueArgs } from "./TaskFindUniqueArgs";
import { CreateTaskArgs } from "./CreateTaskArgs";
import { UpdateTaskArgs } from "./UpdateTaskArgs";
import { DeleteTaskArgs } from "./DeleteTaskArgs";
import { CompletionFindManyArgs } from "../../completion/base/CompletionFindManyArgs";
import { Completion } from "../../completion/base/Completion";
import { TaskService } from "../task.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Task)
export class TaskResolverBase {
  constructor(
    protected readonly service: TaskService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Task",
    action: "read",
    possession: "any",
  })
  async _tasksMeta(
    @graphql.Args() args: TaskCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Task])
  @nestAccessControl.UseRoles({
    resource: "Task",
    action: "read",
    possession: "any",
  })
  async tasks(@graphql.Args() args: TaskFindManyArgs): Promise<Task[]> {
    return this.service.tasks(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Task, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Task",
    action: "read",
    possession: "own",
  })
  async task(@graphql.Args() args: TaskFindUniqueArgs): Promise<Task | null> {
    const result = await this.service.task(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Task)
  @nestAccessControl.UseRoles({
    resource: "Task",
    action: "create",
    possession: "any",
  })
  async createTask(@graphql.Args() args: CreateTaskArgs): Promise<Task> {
    return await this.service.createTask({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Task)
  @nestAccessControl.UseRoles({
    resource: "Task",
    action: "update",
    possession: "any",
  })
  async updateTask(@graphql.Args() args: UpdateTaskArgs): Promise<Task | null> {
    try {
      return await this.service.updateTask({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Task)
  @nestAccessControl.UseRoles({
    resource: "Task",
    action: "delete",
    possession: "any",
  })
  async deleteTask(@graphql.Args() args: DeleteTaskArgs): Promise<Task | null> {
    try {
      return await this.service.deleteTask(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Completion], { name: "completions" })
  @nestAccessControl.UseRoles({
    resource: "Completion",
    action: "read",
    possession: "any",
  })
  async findCompletions(
    @graphql.Parent() parent: Task,
    @graphql.Args() args: CompletionFindManyArgs
  ): Promise<Completion[]> {
    const results = await this.service.findCompletions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
