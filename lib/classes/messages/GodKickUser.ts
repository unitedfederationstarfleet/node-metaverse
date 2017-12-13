// This file has been automatically generated by writeMessageClasses.js

import {UUID} from '../UUID';
import {MessageFlags} from '../../enums/MessageFlags';
import {MessageBase} from '../MessageBase';
import {Message} from '../../enums/Message';

export class GodKickUserMessage implements MessageBase
{
    name = 'GodKickUser';
    messageFlags = MessageFlags.FrequencyLow;
    id = Message.GodKickUser;

    UserInfo: {
        GodID: UUID;
        GodSessionID: UUID;
        AgentID: UUID;
        KickFlags: number;
        Reason: Buffer;
    };

    getSize(): number
    {
        return (this.UserInfo['Reason'].length + 2) + 52;
    }

    writeToBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        this.UserInfo['GodID'].writeToBuffer(buf, pos);
        pos += 16;
        this.UserInfo['GodSessionID'].writeToBuffer(buf, pos);
        pos += 16;
        this.UserInfo['AgentID'].writeToBuffer(buf, pos);
        pos += 16;
        buf.writeUInt32LE(this.UserInfo['KickFlags'], pos);
        pos += 4;
        buf.writeUInt16LE(this.UserInfo['Reason'].length, pos);
        pos += 2;
        this.UserInfo['Reason'].copy(buf, pos);
        pos += this.UserInfo['Reason'].length;
        return pos - startPos;
    }

    readFromBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        let varLength = 0;
        const newObjUserInfo: {
            GodID: UUID,
            GodSessionID: UUID,
            AgentID: UUID,
            KickFlags: number,
            Reason: Buffer
        } = {
            GodID: UUID.zero(),
            GodSessionID: UUID.zero(),
            AgentID: UUID.zero(),
            KickFlags: 0,
            Reason: Buffer.allocUnsafe(0)
        };
        newObjUserInfo['GodID'] = new UUID(buf, pos);
        pos += 16;
        newObjUserInfo['GodSessionID'] = new UUID(buf, pos);
        pos += 16;
        newObjUserInfo['AgentID'] = new UUID(buf, pos);
        pos += 16;
        newObjUserInfo['KickFlags'] = buf.readUInt32LE(pos);
        pos += 4;
        varLength = buf.readUInt16LE(pos);
        pos += 2;
        newObjUserInfo['Reason'] = buf.slice(pos, pos + varLength);
        pos += varLength;
        this.UserInfo = newObjUserInfo;
        return pos - startPos;
    }
}
