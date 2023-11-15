/**
 * APM约定的 ResourceAttributes
 *
 * @see 暂时没有对外文档
 */
export const ApmResourceAttributes = {
    /**
     * APM的token
     * 在APM创建一个实例后，APM会给这个实例创建一个对应的“上报地址”和“token”
     *
     * @see https://console.cloud.tencent.com/apm/monitor/access
     */
    APM_TOKEN: 'token',


    /**
     * 模块 ID
     *
     * @example 'bigdata'
     */
    APP_ID: 'app.id',

    /**
     * 模块名称
     *
     * @example '大数据模块'
     */
    APP_NAME: 'app.name',

    /**
     * server ID
     *
     * @example 'collector'
     */
    SERVER_ID: 'server.id',

    /**
     * server 名称
     *
     * @example '收集服务'
     */
    SERVER_NAME: 'server.name',

    /**
     * server 负责人
     *
     * 多个负责人用英文分号分隔
     *
     */
    SERVER_OWNER: 'server.owner',
};