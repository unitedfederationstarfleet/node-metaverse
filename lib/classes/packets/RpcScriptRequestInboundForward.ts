// This file has been automatically generated by writePacketClasses.js

import {UUID} from '../UUID';
import {IPAddress} from '../IPAddress';
import {MessageFlags} from '../../enums/MessageFlags';
import {Packet} from '../Packet';

export class RpcScriptRequestInboundForwardPacket implements Packet
{
    name = 'RpcScriptRequestInboundForward';
    flags = MessageFlags.Trusted | MessageFlags.Deprecated | MessageFlags.FrequencyLow;
    id = 4294902176;

    DataBlock: {
        RPCServerIP: IPAddress;
        RPCServerPort: number;
        TaskID: UUID;
        ItemID: UUID;
        ChannelID: UUID;
        IntValue: number;
        StringValue: string;
    };

    getSize(): number
    {
        return (this.DataBlock['StringValue'].length + 2) + 58;
    }

}